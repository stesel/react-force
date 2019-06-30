[![Build Status](https://travis-ci.org/stesel/react-with-force.svg?branch=master)](https://travis-ci.org/stesel/react-with-force) [![npm version](https://badge.fury.io/js/react-with-force.svg)](https://badge.fury.io/js/react-with-force)
# react-with-force

**A physics physics engine for React.**

*Recently I was started of thinking about physics representation using React.*
*Now its time to build a some reusable library.*

Here will be API description for React Component according the Laws Of Physics.

## gravity
Package `Gravity` is used for applying **free fall force** to the objects.

### consts
Defined commonly used constants of gravity acceleration for some planets and satellites:

`SUN_GRAVITY_ACCELERATION` - Sun.

`MERCURY_GRAVITY_ACCELERATION` - Mercury.

`VENUS_GRAVITY_ACCELERATION` - Venus.

`EARTH_GRAVITY_ACCELERATION` - Earth.

`MOON_GRAVITY_ACCELERATION` - Moon.

`MARS_GRAVITY_ACCELERATION` - Mars.

`JUPITER_GRAVITY_ACCELERATION` - Jupiter.

`SATURN_GRAVITY_ACCELERATION` - Saturn.

`URANUS_GRAVITY_ACCELERATION` - Uranus.

`NEPTUNE_GRAVITY_ACCELERATION` - Neptune.

### Gravity
This is wrapper-provider of *gravitation acceleration* for `React` children components.

*@params: { gravityAcceleration: number }(optional), default value - EARTH_GRAVITY_ACCELERATION.*

### connectGravity
It creates a high order component for an effect of gravitation force.

*@param Component - its props extend interface { y: number }.*
