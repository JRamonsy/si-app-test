
import { useContext } from "react";
import { PlateDataContext } from "../context/PlateDataContext";
import { HandleFuntionsContext } from "../context/HandleFunctionsContext";
import FollowUp2 from "./FollowUp2";
import { MdOutlinePostAdd } from "react-icons/md";
import { IoMdExit } from "react-icons/io";




const HeaderFollowUp = () => {

  const {infos} = useContext(PlateDataContext);
  
  const {handleExitLogin, handleNew} = useContext(HandleFuntionsContext);
  

  return (
    <div>
      <header className="w-full m-2 flex">
        <div className="w-2/12 flex justify-center items-center">
          <img className="w-[200px] rounded border-black border-[4px]" src="\logo suministros industriales.png" alt="" />
        </div>
        <div className="w-8/12 flex flex-col justify-center items-center">
          <h2 className='  text-3xl text-white font-bold font-sans'>SEGUIMIENTO DE ORDENES</h2>  
          <button onClick={handleNew} className='bg-sky-600 text-white py-1 px-2 border-0 rounded-[8px] cursor-pointer m-0.5 hover:bg-sky-500 h-10 ' title="Nuevo registro" ><MdOutlinePostAdd /></button>
        </div>
        <div className="w-2/12  flex justify-center items-center">
          <button onClick={handleExitLogin} className='h-8 bg-red-600 text-white py-1 px-2 border-0 rounded-[8px] cursor-pointer m-0.5 hover:bg-red-500' title="Salir" ><IoMdExit /></button>
        </div>
      </header>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='flex'>
              <th className='font-sans border border-solid border-black bg-sky-600 text-slate-300 p-1 text-sm text-center basis-1/12'>ID</th>
              <th className='font-sans border border-solid border-black bg-sky-600 text-slate-200 p-1 text-sm text-center basis-1/12'>ESTATUS</th>
              <th className='font-sans border border-solid border-black bg-sky-600 text-slate-200 p-1 text-sm text-center basis-1/12'>CLIENTE</th>
              <th className='font-sans border border-solid border-black bg-sky-600 text-slate-200 p-1 text-sm text-center basis-1/12'>USUARIO</th>
              <th className='font-sans border border-solid border-black bg-sky-600 text-slate-200 p-1 text-sm text-center basis-1/12'>FECHA DE INICIO</th>
              <th className='font-sans border border-solid border-black bg-sky-600 text-slate-200 p-1 text-sm text-center basis-1/12' >REMISIÓN</th>
              <th className='font-sans border border-solid border-black bg-sky-600 text-slate-200 p-1 text-sm text-center basis-1/12' >FECHA DE TERMINO</th>
              <th className='border border-solid border-black bg-sky-600 text-slate-200 p-1 text-sm text-center basis-2/12' >DESCRIPCIÓN RAPIDA</th>
              <th className='font-sans border border-solid border-black bg-sky-600 text-slate-200 p-1 text-sm text-center basis-1/12' >COTIZACIÓN</th>
              <th className='font-sans border border-solid border-black bg-sky-600 text-slate-200 p-1 text-sm text-center basis-2/12' >FORMATOS</th>
            </tr>
          </thead>
        </table>  
        <div>

        {
  infos?.map((info) => {
    const trueCount = info.checkList 
      ? Object.values(info.checkList).filter(value => value === true).length 
      : 0;

    return (
      <div key={info.id}>
        {/* Renderiza FollowUp2 siempre */}
        <FollowUp2 
          info={info} 
          trueCount={trueCount}
        />


        {/* {info.checkList ? (
          <h2>Total de valores true: {trueCount}</h2>
        ) : (
          <h2>Crear checklist</h2>
        )} */}
      </div>
    );
  })
}

          {/* {
            infos?.map((info) => {
              const trueCount = Object.values(info.checkList).filter(value => value === true).length;
              return (
                <div key={info.id}>
                  <FollowUp2 
                    info={info} 
                    trueCount={trueCount}
                  />
                  <h2>Total de valores true: {trueCount}</h2>
                </div>
              );
            })
          } */}
        </div>
      
    </div>
  )
}

export default HeaderFollowUp
