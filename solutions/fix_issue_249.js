// Solution for issue #249
// Generated automatically by Baobot

Certainly! Below is a sample Node.js script that addresses the issue of solving the program order in the `athanor` project. This is a simplified representation and assumes that the issues mentioned (milestones, gates, and dependency edges) are represented as JSON objects in the `dependencies` array of each program.


// Example program data
const programs = [
    { id: 1, name: "Program 1", dependencies: [] },
    { id: 2, name: "Program 2", dependencies: [1] },
    { id: 3, name: "Program 3", dependencies: [2] }
];

function programOrder(programs) {
    const order = [];
    const visited = new Set();

    function dfs(programId) {
        if (visited.has(programId)) {
            throw new Error(`Cycle detected: Program ${programId} depends on itself or another cyclically.`);
        }
        visited.add(programId);

        if (programs[programId].dependencies.length > 0) {
            for (const dep of programs[programId].dependencies) {
                dfs(dep);
            }
        }

        order.push(programId);
        visited.delete(programId);
    }

    for (const program of programs) {
        if (programs[program.id].dependencies.length === 0) {
            dfs(program.id);
        }
    }

    return order;
}

const order = programOrder(programs);
console.log("Program order:", order);


This script assumes the `programs` array contains objects with `id`, `name`, and `dependencies` properties. The `dependencies` property is an array of IDs for programs that this program depends on. The script uses depth-first search (DFS) to determine the order in which the programs can be executed, ensuring there are no cycles.

Please replace the `programs` array with the actual data from the `athanor` project.