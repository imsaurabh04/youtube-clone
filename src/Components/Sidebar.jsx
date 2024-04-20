import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory, setSelectedCategoryLogo }) => {

    return (
        <Stack 
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "94%"},
                flexDirection: { md: "column" }
        }}>
            {categories.map(category => {
                return (
                    <button 
                        className="category-btn"
                        style={{
                            background: category.name === selectedCategory && "#FC1503",
                            color: "#fff"
                        }}
                        onClick={() => {
                            setSelectedCategory(category.name)
                            setSelectedCategoryLogo(category.icon)
                        }}
                        key={category.name}
                        >
                        <span style={{ color: category.name === selectedCategory ? "#fff" : "#FC1503", marginRight: "15px" }}>{category.icon}</span>
                        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>{category.name}</span>
                    </button>
                )
            })}
        </Stack>
    )
}

export default Sidebar