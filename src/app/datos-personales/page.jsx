"use client";
import Layaout from "../../components/Layout";
import { useGetVerifyQuery } from "../../redux/services/userApi";
import { useGetProfileQuery } from "../../redux/services/userApi";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Select, SelectItem } from "@nextui-org/react";
import Profile from "../../components/Profile";
import UpdateEmail from "../../components/Profile/UpdateEmail";
import UpdatePassword from "../../components/Profile/UpdatePassword";

import Load from "../../components/Load";
export default function Page() {
  const { data: user, isLoading } = useGetProfileQuery();

  if (isLoading) {
    return <Load />
  }

  return (
    <div>
      <Layaout>
        <div className="max-h-full w-full bg-zinc-100">
          <div className="max-w-3xl mx-auto">
            <div className="border-b border-gray-900/10 pb-5 p-5">
              {!isLoading && <Profile data={user?.data} />}

              {!isLoading && <UpdateEmail data={user?.data} />}

              {!isLoading && <UpdatePassword />}
            </div>
          </div>
        </div>
      </Layaout>
    </div>
  );
}
