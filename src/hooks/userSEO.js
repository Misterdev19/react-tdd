import { useEffect } from "react";

export function useSEO({title,descripcion}) {
    
  useEffect(() => {
      document.title = title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', descripcion);
  },[title,descripcion])
    
}