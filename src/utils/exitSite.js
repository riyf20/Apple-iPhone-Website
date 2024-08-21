export const exitSite = (event, link) => {

    const userConfirmed = window.confirm("You are about to leave my page and will be redirected to the official Apple Website. Do you want to continue?");
    if (!userConfirmed) {
        event.preventDefault();
    } else {
        window.location.href = link; 
    }
      
}