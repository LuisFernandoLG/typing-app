import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFetch } from "../hooks/useFetch";
import { ExerciseItem } from "../components/homepage/ExerciseItem";
import { Loader } from "../components/Loader";
import { ToolBarSearch } from "../components/searchBar/ToolBarSearch";
import { Wrapper } from "../components/shareStyleComponents/Wrapper";
import { toast } from "react-toastify";
import { endpoints } from "../components/signIn/api";
import { NoResultsMessage } from "../components/homepage/NoResultsMessage";

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
    if (category !== null && category !== -1 && search !== "") {
      let url = `${endpoints.search}?query=${search}&category=${category}`;
      fetchData(url);
    } else if (category !== null && category !== -1) {
      let url = `${endpoints.search}?category=${category}`;
      fetchData(url);
    } else if (search !== "") {
      let url = `${endpoints.search}?query=${search}`;
      fetchData(url);
    }
  };

  useEffect(() => {
    fetchData(endpoints.exercises);
  }, []);

  useEffect(() => {
    searchByQuery();
  }, [category]);

  useEffect(() => {
    if (data === null) return null;
    setExercises(filterEnableExer(data.data));
  }, [data]);

  const filterEnableExer = (items) => {
    return items.filter((item) => item.status !== 2);
  };

  useEffect(() => {
    if (fetchErrors) {
      toast.error("Algo salió mal :(");
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
  min-height: 100vh;
`;

const QuotesContainer = styled.main``;