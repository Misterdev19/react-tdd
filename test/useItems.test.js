import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { UseItems } from "../src/hooks/useItems";

describe("useItems", () => {
    test('should add new item and remove the item', () => {
        const { result } = renderHook(() => UseItems());


        /**
          se agregan dos elementos
         */
        expect(result.current.items.length).toBe(0); 

        act(() => {
            result.current.addItems('Jugar a video juegos');
            result.current.addItems('Jugar a video juegos');
        });
        
        
        expect(result.current.items.length).toBe(2);

         /*
            elimina el primer elemento
         */
        act(() => {
            result.current.removeItem(result.current.items[0].id)
            
        })
        expect(result.current.items.length).toBe(1);
    })
})