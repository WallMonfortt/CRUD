import axios from 'axios'

export const create = async (task) => {
  const response = await axios({
    method: "POST",
    baseURL: "https://todos-go.herokuapp.com/api/todos",
    data: task
  })
  console.log(response);
  return response
}

export const read = async () => {
  const response = await axios({
    method: "GET",
    baseURL: "https://todos-go.herokuapp.com/api/todos"
  });
  return response.data
};

export const updateTask = async (task) => {
  const response = await axios({
    method: "PUT",
    url: `/${task.id}`,
    baseURL: "https://todos-go.herokuapp.com/api/todos",
    data: task
  });
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios({
    method: "DELETE",
    url: `/todos/${id}`,
    baseURL: "https://todos-go.herokuapp.com/api",
  });
  return response
};

