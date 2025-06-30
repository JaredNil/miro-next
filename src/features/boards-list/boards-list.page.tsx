import {href, Link} from "react-router-dom";
import {ROUTES} from "@/shared/model/routes.tsx";
import {rqClient} from "@/shared/api/instance.ts";

function BoardsListPage() {

    const boardQuery = rqClient.useQuery("get",
        '/boards');

    return <div>
        <div>
            Board page
        </div>
        {   boardQuery.data?.map(board => (
                <Link to={href(ROUTES.BOARD, {boardId: board.id})}>{board.name}</Link>
            )
        )
        }
    </div>;
}

export const Component = BoardsListPage;
