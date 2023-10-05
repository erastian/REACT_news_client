// import React from 'react';
import { FullPageWrapper } from "~shared/ui/fullPageWrapper";
import useDocumentTitle from "~shared/document-title";
//
// type IArticleProps = {
//   props: React.ReactComponentElement<any>
// }
const articleName = 'article numero uno'
export function Article() {
  useDocumentTitle(`News Portal: ${articleName} `);
  return (
      <FullPageWrapper>
        <div className="">
          <h3>{ articleName }</h3>
          <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate dicta fuga, illo in obcaecati sequi similique veritatis. Amet autem culpa ea facere impedit libero natus non quam, reprehenderit sunt?</span><span>Aliquam atque culpa eligendi exercitationem expedita natus nisi nobis! Cumque dolore est fugit officia officiis, repellendus similique temporibus. Aliquid beatae blanditiis eius nemo perferendis quae quaerat quas repellat, reprehenderit! Debitis.</span><span>Adipisci aut consectetur consequatur debitis, dicta dignissimos expedita explicabo illo ipsam iure laudantium maxime optio quasi quibusdam reprehenderit saepe tempore! Amet doloremque enim ex incidunt iure magnam sapiente, temporibus velit?</span><span>Fugiat id ipsum labore numquam obcaecati, recusandae veritatis! Ad aperiam architecto consequuntur, deserunt incidunt inventore minima minus necessitatibus nostrum nulla odit officia quas quisquam quod sapiente. Aliquid consequatur eveniet ratione?</span><span>Animi cum cupiditate deleniti, dolor dolore eveniet exercitationem hic impedit in magni minus natus neque porro quaerat quam quasi quidem quis reiciendis rem suscipit temporibus, voluptate voluptates voluptatum. Inventore, voluptas.</span><span>Aperiam at distinctio eius fugit harum id iste, labore laudantium, maxime nam neque nobis, non officiis pariatur quam quas quis quos ratione sed soluta sunt tempora temporibus ullam vitae voluptates?</span><span>Debitis distinctio et excepturi nihil, nobis voluptatum! Aperiam laboriosam, nam. Ad adipisci aliquam aspernatur ea illo, iure libero nostrum numquam quae ratione unde voluptates! Eaque minima, voluptas. Aut nobis, repudiandae!</span><span>Ab aliquam dolore dolorem eum impedit maxime, natus perspiciatis, reiciendis repudiandae tenetur veniam vero voluptas voluptates! Consequuntur dolores ipsum quia voluptate? Dignissimos eum exercitationem facilis labore laboriosam libero minima recusandae!</span></p>
        </div>
      </FullPageWrapper>
  );
}
