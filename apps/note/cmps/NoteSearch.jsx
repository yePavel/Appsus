export function NoteSearch() {

function heandelClick() {
console.log('heandelClick()')
}

    return (
        <section  className="search-container">
             <input
                name="txt"
                type="search"
                placeholder="Search..."
                className="search-input"
                onClick={() => heandelClick()}
             />
        </section>
    )

}

{/* <section className="search-container">
<input
   name="txt"
   type="search"
   placeholder="Search..."
   className="search-input"
   onClick={()=>}
/>
</section> */}