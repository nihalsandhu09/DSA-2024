<!-- Basic of array  -->
Array is nothing but a data strucutre 

n array is a linear data structure that stores elements in a contiguous block of memory. Each element can be accessed directly by its index, which is a number representing the position of the element. Arrays are often used to store collections of data, and they are efficient for accessing elements in constant time, but they can be inefficient for operations like insertion and deletion, especially if done frequently.

Key Characteristics of Arrays:
Fixed Size: The size of an array is determined when it's created, and it cannot be changed (in static arrays).
Indexed Access: Each element in an array can be accessed using its index, starting from 0 in most languages.
Homogeneous Elements: Arrays generally store elements of the same data type (in some languages, mixed types are allowed).
Common Operations:
Accessing Elements: O(1) time complexity to access elements by index.
Inserting Elements: Inserting at the end is O(1), but inserting in the middle requires shifting elements and takes O(n) time.
Deleting Elements: Deleting an element requires shifting, so it takes O(n) time.
Searching for Elements: Linear search takes O(n) time, and binary search takes O(log n) (in sorted arrays).



Arrays in computer memory are stored in contiguous blocks of memory. This means that all the elements of the array are placed next to each other in sequential memory addresses. The starting address of the array is called the base address, and the position of each element is determined by its index.

Here’s a more detailed breakdown:

Memory Storage for Arrays:
Contiguous Memory Allocation: In most programming languages, including JavaScript (at a lower level), arrays are stored in a single block of memory where each element is placed next to the other. The elements are stored in consecutive memory addresses. This allows for efficient random access using the index.

Base Address & Offset Calculation: The address of an element in the array is calculated using this formula:

Address of element
=
Base address
+
(
Index
×
Size of each element
)
Address of element=Base address+(Index×Size of each element)
Base address: The starting memory location of the array.
Index: The position of the element in the array.
Size of each element: The size in bytes of each element in the array (depends on the data type).
For example, if an array starts at address 1000, and each element is 4 bytes (like an integer), the second element (index 1) would be at address:

Address
=
1000
+
(
1
×
4
)
=
1004
Address=1000+(1×4)=1004
Stack vs. Heap:

Stack: If an array is of a small, fixed size and defined within a function (like a local array in C/C++), it might be stored in the stack memory. Stack memory is small and is used for managing temporary data like local variables.
Heap: Dynamically allocated arrays (like in JavaScript) are stored in the heap memory, which is larger and used for dynamically managed memory. JavaScript's arrays are dynamically sized, so they reside in the heap, and the runtime manages memory allocation and resizing.
JavaScript Specific: JavaScript arrays are not strictly arrays in the low-level sense but rather objects that behave like arrays. When you add or remove elements, the JavaScript engine dynamically allocates and deallocates memory as needed. The underlying memory management is handled by the JavaScript engine and may use various strategies to optimize memory usage.

The actual memory locations for JavaScript arrays are abstracted away from the developer. Internally, the JavaScript engine might use hash tables, linked lists, or optimized contiguous memory depending on the array's size and usage.
Visual Representation of Array Memory Layout:
If you had an array [10, 20, 30] in memory, with each element being 4 bytes, it might look something like this:

Memory Address	Value
1000	10
1004	20
1008	30
The addresses increase by 4 bytes (since an integer is typically 4 bytes).

Why Contiguous Memory is Important:
Efficient Access: Since the elements are stored next to each other, accessing any element using its index is fast (O(1) time complexity), because the address can be directly computed.
Cache-friendly: Modern CPUs are optimized for contiguous memory accesses, so storing data sequentially in memory helps take advantage of the CPU cache, improving performance.
In summary, arrays are stored in contiguous blocks of memory for efficient access, and JavaScript arrays (though abstracted) reside in heap memory with dynamic resizing managed by the JavaScript engine.






