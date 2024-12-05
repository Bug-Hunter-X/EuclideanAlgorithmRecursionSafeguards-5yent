# Infinite Recursion in Euclidean Algorithm

This repository demonstrates a common error in recursive function implementations: infinite recursion.  The provided JavaScript code implements the Euclidean algorithm to find the greatest common divisor (GCD) of two numbers. However, it lacks proper handling of the base case where the second number is zero, leading to an infinite loop.

## Bug Description

The `foo` function uses recursion to compute the GCD. If the second argument `b` is zero, the recursive call `foo(a, b - a)` will continue indefinitely without ever reaching the base case. This results in a stack overflow error. 

## Solution

The solution involves adding a check for the case where b is zero.  If b is zero, the function should return a (since the GCD of a and 0 is a).