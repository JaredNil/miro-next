import {authHandlers} from "@/shared/api/mocks/handlers/auth.ts";
import {boardsHandlers} from "@/shared/api/mocks/handlers/boards.ts";

export const handlers = [
    ...boardsHandlers,
    ...authHandlers,
];
