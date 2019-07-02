import * as React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import { useAnimation, useAnimationTime } from "../../utils/hooks";

const animationInterval = 1;
const animationId = animationInterval;

const animationTimeSpy = jest.fn().mockReturnValue(animationInterval);
const animationIdSpy = jest.fn().mockReturnValue(animationId);
const callbackSpy = jest.fn();

const requestAnimationFrameSpy = jest.spyOn(
    window,
    "requestAnimationFrame",
).mockImplementation(callback => {
    const time = animationTimeSpy();
    window.setTimeout(callback, animationInterval, time);
    return animationIdSpy(time);
});

const cancelAnimationFrameSpy = jest.spyOn(
    window,
    "cancelAnimationFrame",
).mockImplementation(id => {
    animationIdSpy(id);
});

const nowSpy = jest.spyOn(Date, "now");

describe("utils/hooks", () => {

    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    beforeEach(() => {
        animationTimeSpy.mockClear();
        animationIdSpy.mockClear();
        callbackSpy.mockClear();
        requestAnimationFrameSpy.mockClear();
        cancelAnimationFrameSpy.mockClear();
        nowSpy.mockClear();
        jest.clearAllTimers();
    });

    describe("useAnimation", () => {

        const TestComponet: React.FunctionComponent = () => {
            useAnimation(callbackSpy);
            return (<div />);
        };

        it("should add callback to animation frame on mount", () => {
            animationIdSpy.mockReturnValue(animationId);
            mount(<TestComponet />);
            expect(requestAnimationFrameSpy).toHaveBeenCalled();
            expect(animationIdSpy).toHaveBeenCalledWith(animationInterval);
        });

        it("should call callback on each animation frame", () => {
            const msToRun = 60;
            mount(<TestComponet />);
            act( () => {
                jest.runTimersToTime(msToRun);
            });
            expect(callbackSpy).toHaveBeenCalledTimes(msToRun);
        });

        it("should call callback with animation time", () => {
            const msToRun = 60;
            animationTimeSpy.mockReturnValue(msToRun);
            mount(<TestComponet />);
            act( () => {
                jest.runTimersToTime(msToRun);
            });
            expect(callbackSpy).toHaveBeenCalledWith(msToRun);
        });

        it("should remove callback from animation frame on unmount", () => {
            const wrapper = mount(<TestComponet />);
            wrapper.unmount();
            expect(cancelAnimationFrameSpy).toHaveBeenCalled();
        });

    });

    describe("useAnimationTime", () => {

        const TestComponet: React.FunctionComponent = () => {
            const time = useAnimationTime();
            return (<div>{time}</div>);
        };

        it("should return '0' on start animation", () => {
            const wrapper = mount(<TestComponet />);
            expect(wrapper.text()).toBe("0");
        });

        it("should return correct value from time when animation is started", () => {
            const msToRun = 60;
            nowSpy.mockReturnValue(0);
            const wrapper = mount(<TestComponet />);
            act( () => {
                nowSpy.mockReturnValue(msToRun);
                jest.runTimersToTime(msToRun);
            });
            expect(wrapper.text()).toBe(msToRun.toString());
        });

    });

});
