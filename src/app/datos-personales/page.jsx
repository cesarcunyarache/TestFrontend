"use client";
import Layaout from "../../components/Layout";
import { useGetVerifyQuery } from "../../redux/services/userApi";
import { useGetProfileQuery } from "../../redux/services/userApi";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Select, SelectItem } from "@nextui-org/react";
import Profile from '../../components/Profile'

export default function page() {
  const { data: user, isLoading } = useGetProfileQuery();
  
  return (
    <div>
      <Layaout>
        <div className="max-h-full bg-zinc-100">
          <div className="max-w-3xl mx-auto ">
            <div className="border-b border-gray-900/10 pb-5 p-5">

              
              {!isLoading && <Profile data={user?.data}></Profile> }


              <form action="" className="border rounded-lg bg-white  mt-5">
                <div className="border-b py-4 px-4">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Información de la cuenta
                  </h2>
                </div>

                <div className="px-4">
                  <div className="mt-5 col-span-full">
                    <Input
                      label="Correo"
                      type="email"
                      placeholder=" "
                      name="correo"
                      value={user?.data.correo}
                    />
                  </div>

                  <div className="col-span-full">
                    <div className="sm:col-span-3">
                      <Button
                        type="submit"
                        className="bg-neutral-900 text-white w-40 my-4"
                      >
                        Actualizar
                      </Button>
                    </div>
                  </div>
                </div>
              </form>

              <form action="" className="border rounded-lg bg-white mt-5 ">
                <div className="border-b py-4 px-4">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Actualizar Contraseña
                  </h2>
                </div>

                <div className="px-4">
                  <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <Input
                        label="Contraseña"
                        type="password"
                        placeholder=" "
                        name="contraseña"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-x-6  sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <Input
                        label="Nueva Contraseña"
                        type="password"
                        placeholder=" "
                        name="contraseña"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <Input
                        label="Confirmar Contraseña"
                        type="password"
                        placeholder=" "
                        name="contraseña"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="sm:col-span-3">
                      <Button
                        type="submit"
                        className="bg-neutral-900 text-white w-40 my-4"
                      >
                        Actualizar
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layaout>
    </div>
  );
}
