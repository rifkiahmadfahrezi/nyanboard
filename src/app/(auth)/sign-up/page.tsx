import React from "react"
import { AuthLayout } from "@/components/auth-layout"
import { SignUpForm } from "@/features/sign-up/signup-form"
import { siteConfig } from "@/config/site"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign up",
}

const SignUpPage = () => {
  return (
    <AuthLayout title={`Sign Up for ${siteConfig.name}`}>
      <SignUpForm />
    </AuthLayout>
  )
}

export default SignUpPage
