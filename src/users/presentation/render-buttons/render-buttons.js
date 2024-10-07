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

    element.append(prevButton, currentPageLabel, nextButton);
}