(function(){

    //ProImg
    function ProImg(props){
        //
        return(
            <img src={`./images/${props.color}.jpg`} alt="상세이미지" />
        )
    }


    // ProColor
    function ProColor(props){
        // let color = window.data.allColor;
        // console.log(color)
        function optionColor(){
            return props.colors.map(
                (item,index)=>{return(
                    <option value={item} key={index}>{item}</option>
                )}
            )
        }
        // 
        function onColorChange(evt){
            props.hColorChange(evt.target.value)
        }

        //
        return(
            <p>
                <label htmlFor="color">color : </label>
                <select 
                defaultValue={props.color}
                id="color"
                onChange={onColorChange}>
                    {optionColor()}
                </select>
            </p>
        )
    }


    //ProSize
    function ProSize(props){
        // let size = window.data.allSize;
        // console.log(size)
        function optionSize(){
            return props.sizes.map(
                (item,index)=>{return(
                    <option value={item} key={index}>{item}</option>
                )}
            )
        }  

        // 
        function onSizeChange(evt){
            props.hSizeChange(evt.target.value)
        }
        

        //
        return(
            <p>
                <label htmlFor="size">size : </label>
                <select 
                defaultValue={props.size}
                id="size"
                onChange={onSizeChange}>
                    {optionSize()}
                </select>
            </p>
        )
    }


    //App
    function App(){
        // state
        const [color,setColor] = React.useState('red')
        const [size,setSize] = React.useState(12)

        const [colors,setColors] = React.useState(window.data.allColor)
        const [sizes,setSizes] = React.useState(window.data.allSize)

        // change함수
        function hColorChange(selectColor){
            let ableSize = window.data.byColor[selectColor]
            setColor(selectColor)

            setSizes(ableSize)
            if(ableSize.indexOf(size) === -1){
                setSize(ableSize[0])
            }
        }
        function hSizeChange(selectSize){
            let ableColor = window.data.bySize[selectSize]
            setSize(selectSize)
            // console.log(ableColor)
            setColors(ableColor)
            // console.log(ableColor.indexOf(color))
            if(ableColor.indexOf(color) === -1){
                setColor(ableColor[0])
            }
        }

        //
        return(
            <div className="custom">
                <div className="pic">
                    <ProImg color={color}/>
                </div>
                <div className="selector">
                    <ProColor 
                    color={color}
                    colors={colors}
                    hColorChange={hColorChange} />

                    <ProSize 
                    size={size}
                    sizes={sizes} 
                    hSizeChange={hSizeChange} />
                </div>
            </div>
        )
    }


    //export
    const room = document.querySelector('#room')

    ReactDOM.render(
        <App />,
        room
    )
}
)()