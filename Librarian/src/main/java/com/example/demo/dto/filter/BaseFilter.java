package com.example.demo.dto.filter;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.Instant;

@ToString
@Getter
@Setter
public class BaseFilter {

    private Long id;
    private Instant createdDate;
    private String createdBy;
    private Instant updatedDate;
    private String updatedBy;

    public String getForLikeQuery(@NotNull String param) {
        return "%" + param.toLowerCase() + "%";
    }

}
