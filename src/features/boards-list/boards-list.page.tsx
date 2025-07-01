import {href, Link} from "react-router-dom";
import {ROUTES} from "@/shared/model/routes.tsx";
import {rqClient} from "@/shared/api/instance.ts";
import {useQueryClient} from "@tanstack/react-query";
import {Button} from "@/shared/ui/kit/button.tsx";

function BoardsListPage() {

    const queryClient = useQueryClient();


    const boardQuery = rqClient.useQuery("get",
        '/boards', {
            onSettled: async () => queryClient.invalidateQueries
            (rqClient.queryOptions("get", "/boards"))
        });
    const createBoardMutation = rqClient.useMutation("post",
        '/boards' , {
        onSettled: async () => queryClient.
        invalidateQueries(rqClient.queryOptions("get", "/boards"))
        })
    const deleteBoardMutation = rqClient.useMutation("delete",
        '/boards/{boardId}' , {
            onSettled: async () => queryClient
                .invalidateQueries(rqClient.queryOptions("get", "/boards"))
        })

    return <div>
        <div>
            Board page
        </div>
        {boardQuery.data?.map(board => (
                <>
                    <Link to={href(ROUTES.BOARD, {boardId: board.id})}>{board.name}</Link>

                    <button onClick={()=> deleteBoardMutation.mutate({
                        params: {path: {boardId: board.id}}
                    })}> удалить </button>
                </>
            ))
        }
        <button onClick={()=> createBoardMutation.mutate(  {
            "body": {
                "name":"Sth-name"
            }})}>добавить
        </button>

        <Button>
            Новая кнопка
        </Button>
    </div>;
}

export const Component = BoardsListPage;
