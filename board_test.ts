import { assertEquals } from "@std/assert";
import { Board } from "./board.ts";

Deno.test("Board starts with number 1 to 9", () =>  {

    const board = new Board();
    assertEquals(board.getRemaining(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
