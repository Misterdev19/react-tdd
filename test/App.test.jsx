import React from "react";
import userEvent from "@testing-library/user-event";    
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App"; 


describe("</App>", () => {

    // test("Prueba para App", () => {
    //     render(<App />);

    //     expect(
    //         screen.getByText('Listado de elementos')
    //     ).toBeDefined()
    // })

    test("should add new item and remove the item", async() => {
        const user = userEvent.setup();  //inicializa el evento de usuario
        
        render(<App />); 

        //buscar el input
        const input = screen.getByRole('textbox');
        expect(input).toBeDefined()

        //buscar el form 
        const form = screen.getByRole('form');
        expect(form).toBeDefined()

        const button = form.querySelector('button');
        expect(button).toBeDefined()

        //escribir en el input
        const randomText = crypto.randomUUID();
        await user.type(input, randomText); +
        await user.click(button);
        
        //comprobar que se agrego el item
        const list = screen.getByRole('list');
        expect(list).toBeDefined()
        expect(list.childNodes.length).toBe(1);
        

        //comprobar que se elimino el item
        const item = screen.getByText(randomText);
        const removeButton = item.querySelector('button');
        expect(removeButton).toBeDefined()
        
        await user.click(removeButton);

        const notResult = screen.getByText("No hay elementos");
        expect(notResult).toBeDefined()
    

     })

})