import { Fragment,useContext } from "react";
import { IsEmpty } from './UtilElements';
import { Spin } from 'antd';
import { UIContext } from '../../global-context/context-providers/UIContext.provider';

const emptyFuntion = (...para)=>{}

const NoResultFound=()=>{
  return (
    <div>No result found</div>
  );
}

const LoopItems=({
    wrapperStyle="todo-list",
    items=[],
    renderIFEmpty=(<NoResultFound/>),
    renderItem=emptyFuntion,
})=>{
    return (
        <ui className={wrapperStyle}>
          <IsEmpty
            value={items}
            renderIFEmpty={renderIFEmpty}
          >
              <Fragment>
                {
                  (items).map((item,index)=>renderItem(item,index))
                }
              </Fragment>
          </IsEmpty>
        </ui>
    )
}

const SpinWrapper = ({
  size="large"
})=>{
  return (
    <Spin 
      size={size}
    />
  )
}

const FullPageLoader=()=>{
  const [uiStatus] = useContext(UIContext);
  return (
    <Fragment>
      {
        ( uiStatus.isload )? (
            <div className="page-loader">
              <SpinWrapper/>
            </div>
          ): ( null )
      }
    </Fragment>
  );
}

export {
    LoopItems,
    NoResultFound,
    emptyFuntion,
    FullPageLoader
}