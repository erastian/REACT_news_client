import styles from './article-controls.module.css'
import { Button } from "~shared/ui/button";
import Icon from "~shared/ui/icon";
import cn from "classnames";

type Props = {
  isPublished: boolean,
  url: string
};

export function ArticleControls(props: Props) {
  const { isPublished, url } = props;

  return (
      <div className={ cn("flex-grid", "mb-3") }>
        <div className={ cn("my-auto", "flex-grid") }>
          { isPublished ?
              <><Icon name='isPublishedIcon'/>&nbsp;Published</> :
              <><Icon name='isUnpublishedIcon'/>&nbsp;Unpublished</> }
        </div>
        <div className={ styles.articleControls }>
          <Button size={ "sm" } variant={ 'filled' } onClick={ () => {
            console.log('Mutate(Delete)', url)
          } }><Icon name='trash' size={ 18 }/> Delete</Button>
          <Button size={ "sm" } variant={ 'filled' } onClick={ () => {
            console.log('Mutate(UnPublish)', url)
          } }><Icon name='unPublishIcon' size={ 18 }/> Unpublish</Button>
          <Button size={ "sm" } variant={ 'filled' } disabled onClick={ () => {
            console.log(`navTo(edit/${ url })`)
          } }><Icon name='edit' size={ 18 }/> Edit</Button>
        </div>
      </div>
  );
}
