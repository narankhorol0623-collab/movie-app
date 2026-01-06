// import * as React from "react";
// import { useState } from "react";
// import SearchButton from "lucide-react";

// // Define the type for the search function that will be passed up
// interface MovieSearchProps {
//   onSearch: (searchTerm: string) => void;
// }

// const MovieSearch: React.FC<MovieSearchProps> = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchClick = (
//     event: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => {
//     event.preventDefault(); // Prevent default form submission behavior if inside a form
//     onSearch(searchTerm);
//   };

//   // Optional: Allow search on "Enter" key press in the input field
//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       onSearch(searchTerm);
//     }
//   };

//   return (
//     <form className="search-form">
//       <input
//         type="text"
//         placeholder="Search for a movie..."
//         value={searchTerm}
//         onChange={handleInputChange}
//         onKeyDown={handleKeyDown}
//         className="search-input"
//       />
//       <SearchButton onClick={handleSearchClick}>
//         Search
//         {/* You could also use a search icon component here, e.g., <AiOutlineSearch /> */}
//       </SearchButton>
//     </form>
//   );
// };

// export default MovieSearch;
