import { useEffect, useState } from "react"
import { getData } from "../api/getData"
import { TableView } from "./TableView";
import { ChartView } from "./ChartView";

export type MyDataType = {
    columns: Column[];
    comments: Comment[];
    data: Datum[];
}

export type Column = {
    code: string;
    text: string;
    comment?: string;
    type: string;
}

export type Comment = {
    variable: string;
    value: string;
    comment: string;
}

export type Datum = {
    key: string[];
    values: string[];
}

type DataViewProps = {
    id?: string,
    valueCodes: { [key: string]: string[]; },
    displayType?: "table" | "chart"
}

export const DataView = ({ id, valueCodes, displayType = "table" }: DataViewProps) => {

    const [data, setData] = useState<MyDataType>()

    useEffect(() => {
        const loadData = async () => {
            if (id) {
                const data = await getData(id, valueCodes);
                setData(data as unknown as MyDataType);
            }
        }

        loadData();
    }, [id, valueCodes])



    return displayType === "table" ? <TableView data={data} /> : <ChartView data={data} />

}