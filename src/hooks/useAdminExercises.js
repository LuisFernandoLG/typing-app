import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { endpoints } from "../components/signIn/api";
import { toast } from "react-toastify";

const initialExercises = [];
export const useAdminExercises = () => {
  const [exercieses, setExercieses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [errorExerciseUpdated, setErrorExerciseUpdated] = useState(null);

  const { fetchData, data, loading } = useFetch();
  const {
    fetchData: fetchPut,
    data: dataUpdated,
    loading: exerLoading,
  } = useFetch();

  const {
    fetchData: fetchPost,
    data: dataAdded,
    loading: exerLoadingAdded,
  } = useFetch();

  useEffect(() => {
    fetchData(endpoints.adminExercises);
  }, []);

  const updateExercise = (id, exercise) => {
    const options = { method: "PUT", body: JSON.stringify(exercise) };
    fetchPut(endpoints.putExercise, options);
  };

  const addExercise = (exercise) => {
    const options = { method: "POST", body: JSON.stringify(exercise) };
    fetchPost(endpoints.postExercise, options);
  };

  useEffect(() => {
    if (dataAdded) {
      fetchData(endpoints.adminExercises);
    }
  }, [dataAdded]);

  useEffect(() => {
    if (dataUpdated) {
      const updatedExer = dataUpdated.data;
      setExercieses(
        exercieses.filter((item) =>
          item.id === updatedExer.id ? updateExercise : item
        )
      );
    }
  }, [dataUpdated]);

  useEffect(() => {
    if (data) {
      setExercieses(data.data.exercises);
      setCategories(data.data.categories);
      setDifficulties(data.data.difficulties);
      setStatuses(data.data.statuses);
    }
  }, [data]);
  return {
    loading,
    updateExercise,
    exercieses,
    categories,
    difficulties,
    statuses,
    updateExercise,
    exerLoading,
    addExercise,
    exerLoadingAdded,
  };
};
