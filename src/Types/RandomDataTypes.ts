

//https://randomuser.me/api/?results=20
export interface IPictureType{
    large:string;
    medium:string;
    thumbnail:string;
}
export interface IdType{
    name:string;
    value:null|string;
}
export interface IRegisteredType{
    date:string;
    age:number;
}
export interface IDobType{
    date:string;
    age:number;
}
export interface ILoginType{
    "uuid": string;
    "username": string;
    "password": string;
    "salt": string;
    "md5":  string;
    "sha1": string;
    "sha256": string;
}
export interface ITimeZoneType{
    offset:string;
    description:string;
}
export interface ICoordinatesType{
    latitude:string;
    longitude:string;
}
export interface IStreetType{
    number:number;
    name:string;
}
export interface ILocationType{
    "city": string;
    "state": string;
    "country": string;
    "postcode": number;
    coordinates:ICoordinatesType;
    timezone:ITimeZoneType;
    street:IStreetType
}
export interface INameType{
    title:string;
    first:string;
    last:string;
}
export interface IResultsType{
    gender:string;
    name:INameType;
    location:ILocationType
    email:string;
    login:ILoginType;
    dob:IDobType;
    registered:IRegisteredType;
    phone:string;
    cell:string;
    id:IdType;
    picture:IPictureType;
    nat:string;
}
export interface IDataType{
    results:IResultsType[]
}