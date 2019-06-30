import { msToSec, secToMs } from "../../utils/time";

describe("utils/time", () => {

    describe("msToSec", () => {

        it("should convert milliseconds to seconds", () => {
            expect(msToSec(12345)).toBe(12.345);
        });

    });

    describe("secToMs", () => {

        it("should convert seconds to milliseconds", () => {
            expect(secToMs(12.345)).toBe(12345);
        });

    });

});
