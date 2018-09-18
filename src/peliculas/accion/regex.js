import React, { Component }from 'react'
import * as Table from '../../components/tabla'
var Arreglo=[{ 'cantidad' : 1, descripcion: 'Leche', PrecU: 20},
             { 'cantidad' : 2, descripcion: 'Coca-cola', PrecU: 12},
             { 'cantidad' : 5, descripcion: 'FuzeTea', PrecU: 15},
             { 'cantidad' : 7, descripcion: 'Pepsi', PrecU: 11}]
console.log(Arreglo)

var result = Arreglo.map((e) => {
  return ( {PrecT:e.cantidad*e.PrecU } )
})

console.log(result)
class Regex extends Component{
  state = {
  }

  render() {
    return (
      <div style={{ flex: 1 }}>
        {
          Arreglo.map((e, i) => {
            return <Table.Row key={i} cantidad={e.cantidad} descripcion={e.descripcion} PrecU={e.PrecU} total={e.cantidad * e.PrecU}/>
          })
        }

      </div>
    )
  }
  // render(){
  //   return(
  //     <div>
  //       <table>
  //         <tbody>
  //           <tr>
  //             <td><strong>Curso</strong></td>
  //             <td><strong>Horas</strong></td>
  //             <td><strong>Horario</strong></td>
  //           </tr>
  //
  //           <tr>
  //             <td>CSS</td>
  //             <td>20</td>
  //             <td>16:00 - 20:00</td>
  //           </tr>
  //
  //           <tr>
  //             <td>HTML</td>
  //             <td>20</td>
  //             <td>16:00 - 20:00</td>
  //           </tr>
  //
  //           <tr>
  //             <td>Dreamweaver</td>
  //             <td>60</td>
  //             <td>16:00 - 20:00</td>
  //           </tr>
  //         </tbody>
  //
  //       </table>
  //     </div>
  //   )
  // }
}
export default Regex
