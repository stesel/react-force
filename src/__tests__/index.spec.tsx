import * as React from "react";
import { shallow } from "enzyme";
import { ReactForce } from "../index";

describe("react-with-force", () => {

    it("should render without exception", () => {
        expect(() => shallow(<ReactForce />)).not.toThrowError();
    });

});
