'use client'

import Button from "./components/common/button";
import Block1 from "./components/layout/block1";
import Block2 from "./components/layout/block2";


export default function Home() {
  const block1Content = {
    title: "Block1 Title",
    text: "Lorem ipsum dolor sit amet. Qui dolor quis sed consequatur vero aut veniam velit aut doloribus repudiandae id voluptatem optio sed quasi molestiae. Et tempore magni ut sunt expedita ut minima esse est omnis temporibus in neque dolorem aut suscipit suscipit ex corrupti consectetur. Est nemo repellat aut iusto natus id temporibus doloremque est dolorem assumenda sit laboriosam saepe quo ducimus dicta! Qui cupiditate facilis ab expedita maxime non praesentium ipsa qui autem vero?             Et tenetur ipsa et soluta sunt sit inventore iure aut corrupti dolores. Ut voluptatem distinctio et quos nulla aut iusto excepturi."
  }

  const block2Content = {
    title: "Block2 Title",
    text: "Lorem ipsum dolor sit amet. Qui dolor quis sed consequatur vero aut veniam velit aut doloribus repudiandae id voluptatem optio sed quasi molestiae. Et tempore magni ut sunt expedita ut minima esse est omnis temporibus in neque dolorem aut suscipit suscipit ex corrupti consectetur. Est nemo repellat aut iusto natus id temporibus doloremque est dolorem assumenda sit laboriosam saepe quo ducimus dicta! Qui cupiditate facilis ab expedita maxime non praesentium ipsa qui autem vero?             Et tenetur ipsa et soluta sunt sit inventore iure aut corrupti dolores. Ut voluptatem distinctio et quos nulla aut iusto excepturi.",
    blockPic: "/assets/images/roronoa-zoro.jpg"
  }
  
  return (
    <div className="">
      <Block1 title={block1Content.title} text={block1Content.text} />
      <Button 
        label="button Component" className={"btn-primary"} onClick={function (): void {
          console.log("button Component clicked");
          ;
        } }        />
      <Block2 title={block2Content.title} text={block2Content.text} blockPic={block2Content.blockPic} />
    </div>
        

  );
}
