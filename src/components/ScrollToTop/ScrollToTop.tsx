import "./ScrollToTop.css";

export function ScrollToTop() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'auto',
        });
      };
    return (
        <footer>
            <button className="scroll-top" onClick={scrollToTop}>Scroll to the top 🔝</button>
        </footer>
    )
}