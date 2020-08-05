package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Board.
 */
@Entity
@Table(name = "board")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Board implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "notice_list")
    private String noticeList;

    @OneToMany(mappedBy = "noticeList")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<Notice> notices = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Board title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getNoticeList() {
        return noticeList;
    }

    public Board noticeList(String noticeList) {
        this.noticeList = noticeList;
        return this;
    }

    public void setNoticeList(String noticeList) {
        this.noticeList = noticeList;
    }

    public Set<Notice> getNotices() {
        return notices;
    }

    public Board notices(Set<Notice> notices) {
        this.notices = notices;
        return this;
    }

    public Board addNotice(Notice notice) {
        this.notices.add(notice);
        notice.setNoticeList(this);
        return this;
    }

    public Board removeNotice(Notice notice) {
        this.notices.remove(notice);
        notice.setNoticeList(null);
        return this;
    }

    public void setNotices(Set<Notice> notices) {
        this.notices = notices;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Board)) {
            return false;
        }
        return id != null && id.equals(((Board) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Board{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", noticeList='" + getNoticeList() + "'" +
            "}";
    }
}
