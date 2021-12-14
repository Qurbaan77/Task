import { useQuery } from "react-query";
import { http, token } from "../axios/index";



export const useContacts = (count: number = 0) => {
  
    const { isLoading, data: contacts, refetch } = useQuery<any>("tokenKey", () => {
      
      
        return token
          .post("/token", {
            refreshToken: "059c420e-7424-431f-b23b-af0ecabfe7b8",
            teamId: "a001994b-918b-4939-8518-3377732e4e88",
          })
          .then((response) => {
            return http
              .get(`/contacts?count=${(count +50)}`, {
                headers: {
                  Authorization: "Bearer " + response.data.access_token,
                },
              })
              .then((response) => {
                return response.data.contacts;
              })
              .catch((error) => console.log({ error }));
          })
          .catch((error) => console.log(error));
      });


    return {isLoading,contacts, refetch}
}
