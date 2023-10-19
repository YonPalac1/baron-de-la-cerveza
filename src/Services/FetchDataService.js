export const get = async (endPoint) => {  
  const response = [];
    try {
      const result = await fetch(endPoint, {method: "GET"})
      const data = await result.json()
      response.push(data)
    } catch (error) {
      console.log(error)
      response.error = error;
    }
  
    return response;
  };
  