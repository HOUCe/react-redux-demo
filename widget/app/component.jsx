import React from 'react';
import * as action from 'action.es';

class DemoApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <SelectedBlock 
                    likedList={this.props.likedList} 
                    onDeleteLikeItem={(item)=>{dispatch(action.deleteLikeItem(item))}}>
                </SelectedBlock>

                <SelectListBlock 
                    selectList={this.props.selectList} 
                    likedList={this.props.likedList} 
                    onAddLikeItem={(index, item) =>{dispatch(action.addLikeItem(index, item))}}>
                </SelectListBlock>
            </div>
        )
    }
}

class SelectedBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    deleteItem(event, index) {
        this.props.onDeleteLikeItem(index);
    }
    render() {
        let likedList = this.props.likedList;
        let likedListArray = [];
        let likedListKey = Object.keys(likedList);
        likedListKey.forEach(function(index){
            likedListArray.push(likedList[index]);
        })
        let deleteIconStyle = {
            backgroundImage: 'url(http://exp.bdstatic.com/static/mobile/user/feed/del_da0d9f3.png)',
            right: '5px',
            top: '10px'
        }
        return (
            <div>
                <h2>已选分类(<em id="f-num">{likedListArray.length}</em>)</h2>
                <div className="selected-list" style={{overflow: 'auto'}}>
                    <ul className="feed-list">
                        {
                            likedListArray.length > 0 ?
                            likedListArray.map((item, index) => {
                                return (
                                    <li style={{position: 'relative'}}>
                                        <span>{item}</span>
                                        <a style={deleteIconStyle} 
                                            onClick={event=>{this.deleteItem(event, likedListKey[index])}}>
                                        </a>
                                    </li>
                                )
                            })
                            :
                            <li className="empty-list">还没有任何订阅<br />请从下方选择订阅</li>
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

class SelectListBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: 0
        }
    }
    onChangeGroup(event) {
        event.stopPropagation();
        let flagNow = this.state.flag;
        if (flagNow == 117) {
            this.setState({
                flag: 0
            });
        }
        else {
            this.setState({
                flag: flagNow + 9
            });
        }
    }
    onSelectItem(index, item) {
        var likedList = this.props.likedList;
        var likedListKey = Object.keys(likedList);
        if ( likedListKey.indexOf(index.toString()) >= 0 ) {
            return;
        }
        this.props.onAddLikeItem(index, item);
    }
    render() {
        let selectListArray = [];
        for (var i in this.props.selectList) {
            selectListArray.push(this.props.selectList[i])
        }
        let likedList = this.props.likedList;
        let likedListKey = Object.keys(likedList);
        return (
            <div>
                <h2 className="clr">
                    <span onClick={event=>{this.onChangeGroup(event)}}>换一换</span>
                选择分类</h2>
                <ul className="feed-list clr">
                    {
                        selectListArray.slice(this.state.flag, this.state.flag+9).map((item, index)=>{
                            return (
                                <li onClick={event=>{this.onSelectItem((index + this.state.flag), item)}} 
                                    key={index + this.state.flag}>
                                    {(likedListKey.indexOf((index + this.state.flag).toString()) >= 0 ?
                                        <span className='disable'>{item}</span>
                                        :
                                        <span>{item}</span>
                                    )}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export { DemoApp }