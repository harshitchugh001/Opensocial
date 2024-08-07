import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import PostApiHanlder from "../../../API_Handlers/post";

interface Post {
  postId: string;
  postName: string;
}

type PostInfo = {
  postId: string;
  postName: string;
};

interface BackendResponse {
  archivedPost: PostInfo[];
  activePost: PostInfo[];
}

type SearchResults = BackendResponse;

interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<SearchResults>>;
  setIsSearchListVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

}

const PhoneSearchBar: React.FC<SearchBarProps> = ({
  setResults,
  setIsLoading
}) => {
  const [searchInput, setSearchInput] = React.useState("");
  const { getSearchPost } = PostApiHanlder();

  async function fetchSearchData(value: string) {
    setIsLoading(true); // Start loading

    try {
      const response = (await getSearchPost(value)) as BackendResponse;
      console.log({ response });

      setResults(response);
    } catch (error) {
      console.error("Error fetching search data:", error);
      setResults({ activePost: [], archivedPost: [] });
    } finally {
      setIsLoading(false); // End loading
    }
  }

  return (
    <div className="input absolute top-0 tablet:left-0 left-[2px] flex-row-center text-[#767676] flex">
      <IoSearch className="absolute small_phone:text-3xl text-2xl tablet:ml-4 ml-2 p-1" />

      <input
        type="text"
        name="search"
        placeholder="Search here...."
        className="rounded-[2rem] tablet:w-[300px] small_phone:w-[220px] w-[200px] tablet:pl-12 small_phone:pl-10 pl-8 tablet:py-3.5 small_phone:py-2.5 py-2 tablet:text-lg text-sm font-normal text-dark dark:text-light dark:bg-dark border border-light dark:focus:outline dark:focus:outline-light"
        value={searchInput}
        onChange={(e) => {
          const value = e.target.value;
          setSearchInput(value);
          fetchSearchData(searchInput);
        }}
      // onBlur={() => {
      //   setResults({ activePost: [], archivedPost: [] });
      //   // setShowSearchBarInPhone(false);
      // }}
      />
    </div>
  );
};

export default PhoneSearchBar;

const data: Post[] = [
  {
    postId: "1",
    postName: "Hello",
  },
  {
    postId: "2",
    postName: "Hello two",
  },
  {
    postId: "3",
    postName: "Hello three",
  },
  {
    postId: "4",
    postName: "Hello four",
  },
  {
    postId: "5",
    postName: "Hello five",
  },
  {
    postId: "6",
    postName: "Hello six",
  },
  {
    postId: "7",
    postName: "Hello seven",
  },
  {
    postId: "8",
    postName: "Hello eight",
  },
  {
    postId: "9",
    postName: "Hello nine",
  },
];
