document.addEventListener('DOMContentLoaded' , () =>{
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedParagraph =
document.getElementById('lastModified');

    // 現在の年を取得して表示
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
    // 最終更新日時を取得して表示
    const lastModifiedDate = document.lastModified;
    lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
});