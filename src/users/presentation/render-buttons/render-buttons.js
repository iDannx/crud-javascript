import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import './render-buttons.css';


export const renderButtons = (element) => {
    const nextButton = document.createElement('button');
    nextButton.innerText = ' Siguiente ->';

    const prevButton = document.createElement('button');
    prevButton.innerHTML = ' <- Anterior ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerHTML = usersStore.getCurrentPage();

    nextButton.addEventListener('click', async() => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });

    prevButton.addEventListener('click', async() => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    })

    element.append(prevButton, currentPageLabel, nextButton);
}