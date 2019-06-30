import * as React from "react";
/**
 * Sun.
 */
export declare const SUN_GRAVITY_ACCELERATION = 273.2;
/**
 * Mercury.
 */
export declare const MERCURY_GRAVITY_ACCELERATION = 3.71;
/**
 * Venus.
 */
export declare const VENUS_GRAVITY_ACCELERATION = 8.88;
/**
 * Earth.
 */
export declare const EARTH_GRAVITY_ACCELERATION = 9.81;
/**
 * Moon.
 */
export declare const MOON_GRAVITY_ACCELERATION = 1.62;
/**
 * Mars.
 */
export declare const MARS_GRAVITY_ACCELERATION = 3.86;
/**
 * Jupiter.
 */
export declare const JUPITER_GRAVITY_ACCELERATION = 23.95;
/**
 * Saturn.
 */
export declare const SATURN_GRAVITY_ACCELERATION = 10.44;
/**
 * Uranus.
 */
export declare const URANUS_GRAVITY_ACCELERATION = 8.86;
/**
 * Neptune.
 */
export declare const NEPTUNE_GRAVITY_ACCELERATION = 11.09;
/**
 * GravityProps.
 */
export interface GravityProps {
    gravityAcceleration?: number;
}
/**
 * Wrapper-provider of gravitation acceleration for React children components.
 * @param props - { gravityAcceleration: number }(optional), default value - EARTH_GRAVITY_ACCELERATION.
 */
export declare const Gravity: React.FC<GravityProps>;
/**
 * Y.
 */
export interface Y {
    y: number;
}
/**
 * ConnectGravity.
 */
declare type ConnectGravity = <A extends Y>(Component: React.ComponentType<A>) => React.FunctionComponent<A>;
/**
 * High order component for an effect of gravitation force.
 * @param Component - its props extend interface Y.
 */
export declare const connectGravity: ConnectGravity;
export {};
