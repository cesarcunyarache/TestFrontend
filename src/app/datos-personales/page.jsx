"use client";
import Layaout from "../../components/Layout";
import { useGetVerifyQuery } from "../../redux/services/userApi";
import { useGetProfileQuery } from "../../redux/services/userApi";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Select, SelectItem } from "@nextui-org/react";

export default function page() {
  const { data: user, isLoading } = useGetProfileQuery();

  return (
    <div>
      <Layaout>
        <form className="max-w-2xl mx-auto m-4 p-4">
          <div className="border-b border-gray-900/10 pb-5">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Información Personal
            </h2>
            <p className="mt-1 text-sm leading-6  text-gray-600"></p>

            <div className="mt-5 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Select
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Seleccione el tipo de documento"
                  label="Tipo de Documento"
                  className="max-w-xs py-2"
                  radius="sm"
                  size="md"
                >
                  <SelectItem key={1} value="111">
                    DNI
                  </SelectItem>
                  <SelectItem key={2} value="333">
                    Pasaporte
                  </SelectItem>
                </Select>
              </div>
              <div className="sm:col-span-3">
                <Input
                  label="Número de Documento"
                  placeholder=" "
                  name="numDoc"
              
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6  sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Input
                  label="Nombres"
                  placeholder=" "
                  name="nombres"
                  value={user?.data.nombres}
                />
              </div>

              <div className="sm:col-span-3">
                <Input
                  label="Apellidos"
                  placeholder=" "
                  name="apellidos"
                  value={user?.data.apellidos}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Input label="Telefono" placeholder=" " name="telefono" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Input
                  label="Fecha de Nacimiento"
                  type="date"
                  placeholder=" "
                  name="fechaNacimiento"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <Select
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Seleccione genero"
                  label="Genero"
                  className="max-w-xs py-2"
                  radius="sm"
                  size="md"
                >
                  <SelectItem key={1} value="Masculino">
                    Masculino
                  </SelectItem>
                  <SelectItem key={2} value="Femenino">
                    Femenino
                  </SelectItem>
                </Select>
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

          <div className="border-b pt-4 border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Informacion de la Cuenta
            </h2>
            <div className="mt-5 col-span-full">
              <Input
                label="Correo"
                type="email"
                placeholder=" "
                name="correo"
                value={user?.data.correo}
              />
            </div>

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
      </Layaout>
    </div>
  );
}
