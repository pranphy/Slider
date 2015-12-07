function Matrix(row,col){
    console.log('I am created now');
    this.Row = row;
    this.Col = col;
    this.Data = new Array(this.Row);
    var that = this;
    for(var i = 0; i < this.Row; i++){
        this.Data[i] =  new Array(this.Col);
    }

    this.Initialize = function(){
        console.log('I am initializing');
        for(var i = 0; i < that.Row; i++){
            for(var j = 0; j < that.Col; j++){
                that.Data[i][j] = 10 * i + j;
            }
        }
    }

    this.Initialize();

    this.Display = function(){
        console.log(' I am called now');
        for(var i = 0; i < that.Row; i++){
            var Line = '';
            for(var j = 0; j < that.Col; j++){
                Line += that.Data[i][j].toString() +' ' ;
            }
            console.log(Line);
        }
    }
}

function Transpose(M) {
    var Row = M.Row;
    var Col = M.Col;
    var Nm = new Matrix(Col,Row);
    for(var row = 0 ; row < Row; row++)
        for(var col = 0; col < Col; col++)
            Nm.Data[col][row] = M.Data[row][col];
    return Nm;
}

function ReflectY(Array){
    var ReturnArray = new Matrix(Array.Row,Array.Col);
    for(var row = 0; row < Array.Row; row++)
        for(var col = 0; col < Array.Col; col++)
            ReturnArray.Data[row][col] = Array.Data[row][Array.Col-col-1];
    return ReturnArray;
}

function ReflectX(Array){
    var ReturnArray = new Matrix(Array.Row,Array.Col);
    for(var row = 0; row < Array.Row; row++)
        for(var col = 0; col < Array.Col; col++)
            ReturnArray.Data[row][col] = Array.Data[Array.Row-1-row][col];
    return ReturnArray;
}

