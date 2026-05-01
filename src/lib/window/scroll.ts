export const scrollToId = (id: string)=>{
  if(!id){
    return;
  }

  const elementToScroll = document.getElementById(id);

  if(elementToScroll){
    elementToScroll.scrollIntoView();
  }

}