import "./ScrollToTop.css";
import { useState } from "react";

export function ScrollToTop() {
    const [visible, setVisible] = useState<boolean>(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100){
          setVisible(true)
        } 
        else if (scrolled <= 100){
          setVisible(false)
        }
      };

      window.addEventListener('scroll', toggleVisible);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'auto',
        });
      };
    return (
        <footer>
            <button className="scroll-top" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>Scroll to the top 🔝</button>
        </footer>
    )
}