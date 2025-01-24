# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common error in React's `useEffect` hook where the cleanup function is not correctly called when the component unmounts.  This can lead to memory leaks or unexpected behavior.

## Problem

The provided `bug.js` file shows an example where the cleanup function within `useEffect` is intended to log 'Component unmounting' when the component is unmounted. However, due to improper usage, this cleanup function might not always be executed, resulting in a potential memory leak or unwanted side effects if resources are not properly released.

## Solution

The `bugSolution.js` file demonstrates the corrected implementation. The key change is ensuring the cleanup function is consistently and correctly called when the component unmounts or when the component updates due to changes in the dependency array.