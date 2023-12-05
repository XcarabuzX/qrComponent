function Card({ children }) {
    return ( 
        <div className="bg-white mx-8 my-4 p-4 rounded-2xl sm:w-96">
            {children}
        </div>
     );
}

export default Card;