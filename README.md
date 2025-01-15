# Node.js Memory Leak: Unremoved Request Listener

This repository demonstrates a common Node.js memory leak scenario caused by an unremoved event listener attached to an incoming HTTP request.  The `req.on('end', ...)` listener is added but never explicitly removed, leading to a build-up of memory as requests are processed.  The solution shows how to properly manage event listeners to prevent this issue.

## Bug

The `bug.js` file contains the problematic code. A long-running task is simulated, and an 'end' event listener is attached to the request. However, this listener isn't removed, causing a memory leak.  Running this code under load will eventually result in high memory consumption.

## Solution

The `bugSolution.js` file provides the corrected code.  The 'end' listener is now removed using `req.removeListener('end', ...)` after the long-running task completes. This prevents memory from accumulating.