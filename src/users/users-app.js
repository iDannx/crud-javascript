import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

export const UsersApp = async(element) => {
    //element.innerHTML = 'Cargando...';
    await usersStore.loadNextPage();
    renderTable(element);
}