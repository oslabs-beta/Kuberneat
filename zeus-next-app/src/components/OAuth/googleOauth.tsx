import React from 'react';
import { useState, useEffect } from 'react';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { ReactNode, ReactElement } from 'react';

const googleContext = React.createContext<null>(null);
