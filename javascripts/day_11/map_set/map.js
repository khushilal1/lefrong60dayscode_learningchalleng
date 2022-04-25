// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
// ew Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size 

let map = new Map(
["name", "John"],
["age", 30],
["city", "New York"]

);

for (let address of map.keys()
) {
    console.log(address);
}