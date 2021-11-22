import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { fadeInAnimation } from "../../style/animations";
import { ExerciseItem } from "../ExerciseItem";
import { Loader } from "../Loader";
import { ToolBarSearch } from "../searchBar/ToolBarSearch";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { toast } from "react-toastify";
import { endpoints } from "../signIn/api";
import { NoResultsMessage } from "../NoResultsMessage";

const initialExercises = [];

export const HomePage = () => {
  const [exercises, setExercises] = useState(initialExercises);
  const { fetchData, fetchErrors, loading, data } = useFetch();
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState("");

  const selectCategory = (idCategory) => {
    setCategory(idCategory);
  };

  const setSearchQuery = (query) => {
    setSearch(query);
  };

  const searchByQuery = () => {
    if (search === "" && category === null) return 0;
    console.log({ search, category });

    if (category !== null && category !== -1 && search !== "") {
      console.log("1");
      let url = `${endpoints.search}?query=${search}&category=${category}`;
      fetchData(url);
    } else if (category !== null && category !== -1) {
      console.log("2");
      let url = `${endpoints.search}?category=${category}`;
      fetchData(url);
    } else if (search !== "") {
      console.log("3");
      let url = `${endpoints.search}?query=${search}`;
      fetchData(url);
    }

    // let url = endpoints.search;
    // if (search !== "" && category !== -1 && category !== null) {
    //   console.warn("SEARCH");
    //   url = `${endpoints.search}?query=${search}`;
    // } else if (category !== null || category !== -1) {
    //   console.warn("SEARCH and CATEGORY");
    //   url = `${endpoints.search}?query=${search}&category=${category}`;
    // } else if ((search = "")) {
    //   console.warn("CATEGORY");
    //   url = `${endpoints.search}?category=${category}`;
    // }
  };

  useEffect(() => {
    fetchData(endpoints.exercises);
  }, []);

  useEffect(() => {
    searchByQuery();
  }, [category]);

  useEffect(() => {
    if (data === null) return null;
    setExercises(data.data);
  }, [data]);

  useEffect(() => {
    if (fetchErrors) {
      toast.error("Algo salió mal :(");
      console.log(fetchErrors);
    }
  }, [fetchErrors]);

  return (
    <HomeContainer>
      <ToolBarSearch
        selectCategory={selectCategory}
        setSearchQuery={setSearchQuery}
        search={search}
        searchByQuery={searchByQuery}
      />
      {loading ? (
        <Loader />
      ) : exercises.length === 0 ? (
        <NoResultsMessage />
      ) : (
        <QuotesContainer>
          {exercises.map(({ id, title, textContent, category, difficulty }) => (
            <ExerciseItem
              key={id}
              id={id}
              title={title}
              content={textContent}
              category={category}
              difficulty={difficulty}
            />
          ))}
        </QuotesContainer>
      )}
    </HomeContainer>
  );
};

const HomeContainer = styled(Wrapper)`
  margin: 1rem 2rem;
  width: 100%;
  animation: ${fadeInAnimation} 800ms ease;
`;

const QuotesContainer = styled.main``;
